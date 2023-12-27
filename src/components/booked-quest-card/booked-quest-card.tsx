import { TQuest } from '../../types/quest';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { displayedLevel } from '../../const';
import { displayedDay } from '../../const';
import { TBookingDays } from '../../types/booking';
import { ReactNode } from 'react';


type BookedQuestCardProps = {
  questCard: TQuest;
  address: string;
  date: TBookingDays;
  time: string;
  peopleCount: number;
  children?: ReactNode;

}

function BookedQuestCard({questCard, address, date, time, peopleCount, children}: BookedQuestCardProps): JSX.Element {
  return(

    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={questCard.previewImgWebp} /><img src={questCard.previewImg} width={344} height={232} alt="" />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={(`${AppRoute.Quest}`.replace(':id', questCard.id))}>{questCard.title}</Link>
          <span className="quest-card__info">
            [{displayedDay[date]}, {time}, {address}]
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{displayedLevel[questCard.level]}
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
}

export default BookedQuestCard;
