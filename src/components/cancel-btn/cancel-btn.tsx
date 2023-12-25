import { fetchDeleteUserQuestAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type CancelButtonProps = {
  id: string;
}

function CancelButton({id}: CancelButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  return(
    <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={() => {
      dispatch(fetchDeleteUserQuestAction(id));
    }}
    >Отменить
    </button>
  );
}

export default CancelButton;
