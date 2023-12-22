import { TQuest } from '../../types/quest';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';


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
        <div className="quest-card__info-wrapper"><Link className="quest-card__link" to={(`${AppRoute.Quest}`.replace(':id', questCard.id))}>{questCard.title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height={14} aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>2&ndash;3&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{questCard.level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
