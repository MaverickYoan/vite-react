import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './wink.tsx'
import './wink.css'

createRoot(document.getElementById('wink')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

function wink() {
    return (
        <>
            <div className="container">
                <header>
                    <h1>🎮 Catalogue de Jeux</h1>
                    <p className="subtitle">Découvrez et gérez votre collection de jeux vidéo</p>
                </header>

                <div className="filters">
                    <div className="filter-group">
                        <label htmlFor="genreFilter">Genre:</label>
                        <select id="genreFilter">
                            <option value="">Tous les genres</option>
                            <option value="Action">Action</option>
                            <option value="Aventure">Aventure</option>
                            <option value="RPG">RPG</option>
                            <option value="Strategie">Stratégie</option>
                            <option value="Sport">Sport</option>
                            <option value="Course">Course</option>
                            <option value="Simulation">Simulation</option>
                            <option value="Puzzle">Puzzle</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <label htmlFor="yearFilter">Année:</label>
                        <select id="yearFilter">
                            <option value="">Toutes les années</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <label htmlFor="searchFilter">Rechercher:</label>
                        <input type="text" id="searchFilter" placeholder="Nom du jeu..." />
                    </div>
                </div>

                {/* <button className="add-game-btn" onClick="openModal()">+ Ajouter un jeu</button> */}

                <div className="games-grid" id="gamesGrid">
                    {/* <!-- Les jeux seront affichés ici --> */}
                </div>

                {/* <!-- Modal pour ajouter/modifier un jeu --> */}
                <div id="gameModal" className="modal">
                    <div className="modal-content">
                        <h2 id="modalTitle">Ajouter un jeu</h2>
                        <form id="gamehtmlForm">
                            <div className="htmlForm-group">
                                <label htmlFor="gameName">Nom du jeu:</label>
                                <input type="text" id="gameName" required />
                            </div>
                            <div className="htmlForm-group">
                                <label htmlFor="gameGenre">Genre:</label>
                                <select id="gameGenre" required>
                                    <option value="">Sélectionner un genre</option>
                                    <option value="Action">Action</option>
                                    <option value="Aventure">Aventure</option>
                                    <option value="RPG">RPG</option>
                                    <option value="Strategie">Stratégie</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Course">Course</option>
                                    <option value="Simulation">Simulation</option>
                                    <option value="Puzzle">Puzzle</option>
                                </select>
                            </div>
                            <div className="htmlForm-group">
                                <label htmlFor="gameYear">Année de sortie:</label>
                                <input type="number" id="gameYear" min="1980" max="2025" required />
                            </div>
                            <div className="htmlForm-group">
                                <label htmlFor="gameDescription">Description:</label>
                                <textarea id="gameDescription" placeholder="Description du jeu..."></textarea>
                            </div>
                        </form>
                        <div className="modal-actions">
                            {/* <button type="button" className="btn-primary" onClick="saveGame()">Enregistrer</button>
                    <button type="button" className="btn-secondary" onClick="closeModal()">Annuler</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default wink