function QuestCard(): JSX. Element {
  return(
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet="img/content/palace/palace-size-s.webp, img/content/palace/palace-size-s@2x.webp 2x" /><img src="img/content/palace/palace-size-s.jpg" srcSet="img/content/palace/palace-size-s@2x.jpg 2x" width="344" height="232" alt="Замок на возвышенности." />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">Тайны старого особняка</a>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>2&ndash;3&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>Лёгкий
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
