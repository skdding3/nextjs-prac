import {useRouter} from "next/router";

export default function UsernameSettings() {
    // http://localhost:3000/sunki/settings

    const router = useRouter();

    const {username} = router.query
    return (
        <div>
            <h1>{username}/settings</h1>
        </div>
    )
}