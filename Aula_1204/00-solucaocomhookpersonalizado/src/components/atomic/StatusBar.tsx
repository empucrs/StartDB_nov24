import { useOnlineStatus} from '../../hooks/useOnlineStatus.ts'

function StatusBar(){

    const isOnline = useOnlineStatus();

    return(
        <div>
            <h1>{isOnline ? "está online": "está desconectado"}</h1>
        </div>
    )

}

export default StatusBar;