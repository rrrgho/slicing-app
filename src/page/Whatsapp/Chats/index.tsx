import Menu from "../Menu";
import Header from "../components/Header";
import ListChat, { IListChat } from "../components/ListChat";
import SearchChat from "../components/Search";


const data: Array<IListChat> = [
    {
        name: 'Zikri Akmal',
        message: 'We are deploying the app now ...',
        time: '09.18',
        isRead: false,
    },
    {
        name: 'Erman Sibarani',
        message: 'Bro, I think we better make this slower',
        time: '07.00',
        isRead: false,
    },
    {
        name: 'Felix Serang',
        message: 'Where is my contract bro ?',
        time: '06.56',
        isRead: true,
    },
    {
        name: 'Jonatan S',
        message: 'I call him to confirm ya',
        time: '06.56',
        isRead: true,
    },
    {
        name: 'Bu Mei',
        message: 'Koh, bisa join meeting sma Telkomsel?',
        time: '23.43',
        isRead: false,
    },
    {
        name: 'Hera',
        message: 'Didalam SRS udah dibuat',
        time: 'Yesterday',
        isRead: true,
    },
    {
        name: 'Tanaka',
        message: 'We are deploying the app now',
        time: 'Yesterday',
        isRead: true,
    },
    {
        name: 'Jonatan S',
        message: 'I call him to confirm ya',
        time: '06.56',
        isRead: true,
    },
    {
        name: 'Bu Mei',
        message: 'Koh, bisa join meeting sma Telkomsel?',
        time: '23.43',
        isRead: true,
    },
    {
        name: 'Hera',
        message: 'Didalam SRS udah dibuat',
        time: 'Yesterday',
        isRead: true,
    },
    {
        name: 'Tanaka',
        message: 'We are deploying the app now',
        time: 'Yesterday',
        isRead: true,
    },
]


const WhatsappChats = () => {
    return (
        <div className='h-dvh bg-black'>
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full h-screen overflow-auto p-4">
                <div className="w-full">
                    <span className="text-4xl text-white font-bold">Chats</span>
                </div>
                <div className="w-full mt-4">
                    <SearchChat />
                </div>
                <div className="w-full mt-10">
                    {
                        data.map((item: IListChat, idx: number) => {
                            return (
                                <div key={idx} className="mt-4">
                                    <ListChat name={item.name} message={item.message} time={item.time} isRead={item.isRead} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full backdrop-blur bg-black/40 absolute bottom-0 left-0 h-[110px]">
                <Menu />
            </div>
        </div>
    )
}

export default WhatsappChats;