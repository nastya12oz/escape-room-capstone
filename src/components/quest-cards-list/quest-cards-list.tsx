import QuestCard from '../quest-card/quest-card';
import { TQuestsList } from '../../types/quest';


type QuestCardsListProps = {
  questsList: TQuestsList;
}


function QuestCardsList({questsList}: QuestCardsListProps): JSX.Element {
  return (
    <>
      <h2 className="title visually-hidden">Выберите квест</h2>
      <div className="cards-grid">
        {questsList.map((quest) => (
          <QuestCard questCard={quest} key={quest.id} />
        ))}
      </div>
    </>
  );
}

export default QuestCardsList;
