
import {useSuiClient } from "@mysten/dapp-kit";
import {SuiEvent} from "@mysten/sui/client";
import {useState} from "react";


const ListGame: React.FC  = () => {
    const client = useSuiClient();
    const [gameEvents, setGameEvents] = useState<SuiEvent[] | null>(null);

    client.queryEvents({
        query: {
            MoveModule:{
                package: "0x29f07bb972a6511703f05d53693c7de9dacf13e141ec8ba763b73ae6fd0218df",
                module: "page",
            },
        },
    }).then((events) => {
        setGameEvents(events.data)
        console.log(events)
    });
    console.log(gameEvents)

    return (
        <div>
            {/*<input onChange={handleNameChange}/>*/}
            {/*<button onClick={handleAddGame}>Add Game</button>*/}
        </div>
    );
};

export default ListGame