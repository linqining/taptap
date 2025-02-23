
import {useSuiClient ,useSignAndExecuteTransaction,} from "@mysten/dapp-kit";
import {Transaction} from "@mysten/sui/transactions";
import {ChangeEvent, useState} from "react";


const AddGame: React.FC  = () => {
    const client = useSuiClient();
    const [gameName, setGameName] = useState<string | null>(null);
    const {mutate:signAndExecute} = useSignAndExecuteTransaction();
    // 处理文件选择
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGameName(event.target.value);
    };
    const handleAddGame = () => {
        const tx = new Transaction();
        if (!gameName) {
            return;
        }
        tx.moveCall({
            package: "0x29f07bb972a6511703f05d53693c7de9dacf13e141ec8ba763b73ae6fd0218df",
            module: "page",
            function: "add_game",
            arguments: [
                tx.object("0xc1e812817f51e112c8a373875f08868a4c896be9c974b0f14796c80d3141578b"),
                tx.pure.string(gameName),
            ]
        });
        signAndExecute({transaction: tx},      {
            onSuccess: async ({ digest }) => {
                const { effects } = await client.waitForTransaction({
                    digest: digest,
                    options: {
                        showEffects: true,
                    },
                });
                alert("Game added"+gameName);
                console.log(effects)
            },
        },);
    }
    return (
        <div>
            <input onChange={handleNameChange}/>
            <button onClick={handleAddGame}>Add Game</button>
        </div>
    );
};

export default AddGame