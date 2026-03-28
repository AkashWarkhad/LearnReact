const ShimmerLoader = () => 
{
    const totalFakeCards = 10;

    return(
        <div>
            <button className="fakeBtn"></button>
            <div className="shimmerLoaderContainer">
                {
                Array.from({length: totalFakeCards}).map((_, index)=> 
                    {
                        return <div key={index} className="fakeCard"></div>
                    })
                }
            </div>
        </div>
    );
}

export default ShimmerLoader;