import QuestCard from '../quest-card/quest-card';
import { useAppSelector } from '../../hooks';
import { getQuestsList } from '../../store/quests-data/quests-data.selectors';

function QuestCardsList(): JSX.Element {
  const questsList = useAppSelector(getQuestsList);

  return (
    <>
      {questsList.map((quest) => (
        <QuestCard questCard={quest} key={quest.id} />
      ))}
    </>
  );
}


export default QuestCardsList;
