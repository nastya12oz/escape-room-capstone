import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSelectedPlace } from '../../store/booking-process/booking-process.selectors';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { getFormDateTime, validateName, validatePhoneNumber } from '../../utils/utils';
import { TBookingData, TCurrentFormData } from '../../types/booking';
import { fetchSendBookingAction, fetchUserQuestsAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';

type BookingFormProps = {
  id: string;
  peopleMinMax: number[];
}

function BookingForm({id, peopleMinMax}: BookingFormProps): JSX.Element {
  const selectedPlace = useAppSelector(getSelectedPlace);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<TCurrentFormData>();

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {

    const {children, date, contactPerson, person, phone} = data as TCurrentFormData;

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
      onSubmit={(evt) => {
        handleSubmit(handleFormSubmit)(evt);
      }}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {selectedPlace && selectedPlace.slots.today.map((slot) => (
              <label className="custom-radio booking-form__date" key={slot.time}>
                <input
                  type="radio"
                  id={`today${slot.time}`}
                  value={`today${slot.time}`}
                  disabled={!slot.isAvailable}
                  {...register('date',
                    { required: 'Обязательное поле' })}
                />
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
                <input
                  type="radio"
                  id={`tomorrow${slot.time}`}
                  value={`tomorrow${slot.time}`}
                  disabled={!slot.isAvailable}
                  {...register('date',
                    { required: 'Обязательное поле' })}
                />
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            {...register('contactPerson', {
              required: 'Имя обязательно.',
              validate: {
                validateName
              }
            })}
          />
          {errors.contactPerson && <p>{errors.contactPerson.message}</p>}
        </div>
        <div className="custom-input booking-form__input">
          <label htmlFor="tel">Контактный телефон</label>
          <input
            type="tel"
            id="tel"
            placeholder="Телефон"
            {...register('phone', {
              required: 'Телефон обязателен.',
              validate: {
                validatePhoneNumber
              }
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className="custom-input booking-form__input">
          <label htmlFor="person">Количество участников</label>
          <input
            type="number"
            id="person"
            placeholder="Количество участников"
            {...register('person', {
              required: 'Укажите количество участников.',
              min: {
                value:peopleMinMax[0],
                message: `Min ${peopleMinMax[0]} people`
              },
              max: {
                value:peopleMinMax[1],
                message: `Max ${peopleMinMax[1]} people`
              },
            })}
          />
          {errors.person && <p>{errors.person.message}</p>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            {...register('children')}
          />
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
