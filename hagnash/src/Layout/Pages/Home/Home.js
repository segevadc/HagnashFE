import './Home.css';
import {Searcher} from "../../../CommonComponents/Search";

export const Home = () => {

    return <div className="landingView">
                <div className="grid searchGrid">
                    <div className="searchText">
                        בחר את <strong>ההגנש<br/>המושלם</strong> עבורך
                    </div>
                    <Searcher onSearch={() => {}}
                        /*className="searchInput"
                        input={{icon: 'search', iconPosition: 'left', size: 'big', placeholder: SEARCH_LABEL}}*/
                    />
                </div>

                <div className="grid imageGrid">

                </div>
            </div>
}