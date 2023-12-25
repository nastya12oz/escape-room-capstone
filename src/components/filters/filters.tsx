import { TLevel, TQuestType } from '../../types/quest';
import { displayedLevel, displayedQuestType } from '../../const';
import { getIconName, getMiddleLevel } from '../../utils/utils';

type FiltersProps = {
  selectedType: TQuestType | null;
  setSelectedType: React.Dispatch<React.SetStateAction<TQuestType | null>>;
  selectedLevel: TLevel | null;
  setSelectedLevel: React.Dispatch<React.SetStateAction<TLevel | null>>;
}


function Filters({selectedType, setSelectedType, selectedLevel, setSelectedLevel}: FiltersProps): JSX.Element {

  const questTypes = Object.values(TQuestType);
  const questLevels = Object.values(TLevel);

  const handleTypeChange = (type: TQuestType) => {
    setSelectedType(type === selectedType ? TQuestType.All : type);
  };

  const handleLevelChange = (level: TLevel) => {
    setSelectedLevel(level === selectedLevel ? TLevel.All : level);
  };


  return(
    <>
      <div className="page-content__title-wrapper">
        <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
        </h1>
        <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
      </div>
      <div className="page-content__item">
        <form className="filter" action="#" method="get">
          <fieldset className="filter__section">
            <legend className="visually-hidden">Тематика</legend>
            <ul className="filter__list">
              {questTypes.map((type) => (
                <li key={type} className="filter__item">
                  <input
                    type="radio"
                    name="type"
                    id={type}
                    onChange={() => handleTypeChange(type)}
                    checked={selectedType === type}
                  />
                  <label className="filter__label" htmlFor={type}>
                    <svg className="filter__icon" width={26} height={30} aria-hidden="true">
                      <use xlinkHref={`#icon-${getIconName(type)}`}></use>
                    </svg><span className="filter__label-text">{displayedQuestType[type]}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
          <fieldset className="filter__section">
            <legend className="visually-hidden">Сложность</legend>
            <ul className="filter__list">
              {questLevels.map((level) => (
                <li key={level} className="filter__item">
                  <input
                    type="radio"
                    name="level"
                    id={getMiddleLevel(level)}
                    onChange={() => handleLevelChange(level)}
                    checked={selectedLevel === level}
                  />
                  <label className="filter__label" htmlFor={getMiddleLevel(level)}>
                    <span className="filter__label-text">{displayedLevel[level]}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Filters;

