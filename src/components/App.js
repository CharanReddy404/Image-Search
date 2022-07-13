import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// const App = () => {
//     return (
//         <div className="ui container" style={{ marginTop: '10px' }}>
//             <SearchBar />
//         </div>
//     );
// }

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const responce = await unsplash
            .get('/search/photos', {
                params: { query: term }
            });
        this.setState({ images: responce.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="container ui">
                    <ImageList images={this.state.images} />
                </div>
            </div>
        );
    }
}

export default App;