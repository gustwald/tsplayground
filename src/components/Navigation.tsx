import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { useTheme } from '../hooks/useTheme';
import { About } from '../pages/About';
import { Home } from '../pages/Home';

export const Navigation: React.FC = () => {
    console.log('init nav');
    const { user } = useUser()!;
    const { theme, } = useTheme()!;
    return (
        <nav>
            <p>inloggad som {user}</p>
            <Router>
                <ul className={`theme theme--${theme}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Home} />
                <Route path="/about/" exact component={About} />
            </Router>
        </nav>
    );
}