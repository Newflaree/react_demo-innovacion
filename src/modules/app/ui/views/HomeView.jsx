import {MainLayout} from '../layout'
import {Button, CustomCard} from '../components'

export const HomeView = () => {
    const name = 'Nico';

    return (
        <MainLayout>
            <h1>Home View {name}</h1>
            <Button />
            <CustomCard />    
        </MainLayout>
    )
}
