import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import QuestCardsList from '../../components/quest-cards-list/quest-cards-list';
import Filters from '../../components/filters/filters';
import { useState } from 'react';
import { TQuestType, TLevel } from '../../types/quest';
import { useAppSelector } from '../../hooks';
import { getQuestsList } from '../../store/quests-data/quests-data.selectors';


function WelcomeScreen(): JSX.Element {
  const questsList = useAppSelector(getQuestsList);

  const [selectedType, setSelectedType] = useState<TQuestType | null>(TQuestType.All);
  const [selectedLevel, setSelectedLevel] = useState<TLevel | null>(TLevel.All);

  const filteredQuests = questsList.filter((quest) => {
    const typeMatches = selectedType === TQuestType.All || quest.type === selectedType;
    const levelMatches = selectedLevel === TLevel.All || quest.level === selectedLevel;
    return typeMatches && levelMatches;
  });

  return(
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room - Квесты в Санкт-Петербурге</title>
      </Helmet>
      <main className="page-content">
        <div className="container">
          <Filters
            setSelectedType={setSelectedType}
            selectedType={selectedType}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
          />
          <QuestCardsList questsList={filteredQuests} />

        </div>
      </main>
      <Footer />
    </div>

  );
}

export default WelcomeScreen;
