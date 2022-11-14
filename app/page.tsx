import { use } from 'react';

type User = {
    id: number;
    login: string;
};

const fetchUsers: () => Promise<User[]> = async () => {
    const res = await fetch('https://api.github.com/users');
    return res.json();
}

const Page = () => {
    const users = use(fetchUsers());

    return (
        <div>
            <h1>GitHub Users!!</h1>
            <div>
                {users.map((user, i) => {
                    return (
                        <div key={user.id}>
                            {user.login}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Page;