import { TQuest } from '../../types/quest';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { displayedLevel } from '../../const';


type QuestCardProps = {
  questCard: TQuest;
}


function QuestCard({questCard}: QuestCardProps): JSX. Element {

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
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height={14} aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{questCard.peopleMinMax[0]}&ndash;{questCard.peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{displayedLevel[questCard.level]}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
