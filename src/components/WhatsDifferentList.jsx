
function WhatsDifferentList() {

    const dataList = [
        {
            num: '01', 
            title: 'Track company-wide progress',
            description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
        },
        {
            num: '02', 
            title: 'Advanced built-in reports',
            description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
        },
        {
            num: '03', 
            title: 'Everything you need in one place',
            description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
        },
    ]

    return (
        <>
        {dataList.map((item, index) => (
            <div key={index}>
                <h3 className="bg-VeryPaleRed lg:bg-transparent py-2 rounded-l-full font-bold text-DarkBlue">
                    <span className="bg-BrightRed text-white py-2.5 px-6 mr-3 rounded-full text-sm font-semibold">
                        {item.num}
                    </span>
                    {item.title}
                </h3>
                <p className='mt-3 mb-10 text-DarkGrayishBlue leading-7 text-sm pr-4 lg:pl-20'>
                    {item.description}
                </p>
            </div>     
        ))}
        </>
    )
}

export default WhatsDifferentList
