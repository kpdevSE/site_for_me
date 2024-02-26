import {Link} from "react-router-dom";
import {data} from "../../data/data";

export default function HeroSection()
{
    return (
        <div>
            {data.users.map(e => (
                <li key={e.id}>
                    <Link to={`/posts/${e.id}`}>{e.name}</Link>
                </li>
            ))}
        </div>
    )
}