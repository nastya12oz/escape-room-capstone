import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSelectedPlace } from '../../store/booking-process/booking-process.selectors';
//import { useForm } from 'react-hook-form';
import { FormEvent } from 'react';
import { getFormDateTime } from '../../utils/utils';
import { TBookingData, TCurrentFormData } from '../../types/booking';
import { fetchSendBookingAction, fetchUserQuestsAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';

type BookingFormProps = {
  id: string;
}

function BookingForm({id}: BookingFormProps): JSX.Element {
  //const { register, handleSubmit } = useForm();
  const selectedPlace = useAppSelector(getSelectedPlace);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = new FormData(form);
    const {children, date, contactPerson, person, phone} = Object.fromEntries(formData) as TCurrentFormData;

    const currentData = {
      date: getFormDateTime(date).date,
      time: getFormDateTime(date).time,
      contactPerson,
      phone,
      withChildren: Boolean(children),
      peopleCount: Number(person),
      placeId: selectedPlace?.id,
    } as TBookingData;

    dispatch(fetchSendBookingAction({currentData, id, navigate}));
    dispatch(fetchUserQuestsAction());
  };

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {selectedPlace && selectedPlace.slots.today.map((slot) => (
              <label className="custom-radio booking-form__date" key={slot.time}>
                <input type="radio" id={`today${slot.time}`} name="date" required value={`today${slot.time}`} disabled={!slot.isAvailable}/>
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {selectedPlace && selectedPlace.slots.tomorrow.map((slot) => (
              <label className="custom-radio booking-form__date" key={slot.time}>
                <input type="radio" id={`tomorrow${slot.time}`} name="date" required value={`tomorrow${slot.time}`} disabled={!slot.isAvailable}/>
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" name="contactPerson" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"/>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" name="phone" placeholder="Телефон" required pattern="[0-9]{10,}"/>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" name="person" placeholder="Количество участников" required/>
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" name="children"/>
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required/>
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
