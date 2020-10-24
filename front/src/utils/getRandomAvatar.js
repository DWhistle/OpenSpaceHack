import avatar1 from '../fakeAvatars/photo.png'
import avatar2 from '../fakeAvatars/photo1.png'
import avatar3 from '../fakeAvatars/photo2.png'

export const getRandomAvatar = () => {
    const avatars = [avatar1, avatar2, avatar3]
    return avatars[Math.floor(Math.random() * Math.floor(avatars.length))]
}
