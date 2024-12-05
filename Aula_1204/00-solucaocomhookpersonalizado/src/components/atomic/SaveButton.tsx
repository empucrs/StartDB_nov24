import { useOnlineStatus } from '../../hooks/useOnlineStatus.ts'

export default function SaveButton() {
    const isOnline = useOnlineStatus();

    function handleSaveClick() {
        console.log('progress saved.');
    }

    return (
        <button onClick={handleSaveClick} disabled={!isOnline}>
            {isOnline ? 'Save progress' : 'Reconnecting...'}
        </button>
    );
}
