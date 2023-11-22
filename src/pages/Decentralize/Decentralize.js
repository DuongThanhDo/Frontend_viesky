import { allFunctions } from '~/datas/dataAllFunctions';
import DecentralizeHeader from './DecentralizeHeader';
import DecentralizeList from './DecentralizeList';
import DecentralizeItemHeader from './DecentralizeItemHeader';

function Decentralize() {
    return (
        <div className="w-full h-full p-6">
            <DecentralizeHeader />

            <DecentralizeList>
                {allFunctions.map((functions, index) => (
                    <DecentralizeItemHeader key={index} functions={functions} />
                ))}
            </DecentralizeList>
        </div>
    );
}

export default Decentralize;
