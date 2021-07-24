const Ads = () => {
    return (
        <div style={{
            display: 'flex',
            marginTop: 40,
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
        }}>
            <img
                src='https://www.sephora.com/contentimages/homepage/072021/Homepage/DesktopMweb/2021-07-22-hp-slide-clean+planetpositive-site-desktop-home-page-promo-banner-choose-1-of-6-handoff-us-d-slice.jpeg?imwidth=482'
                style={{marginTop: 10,width:'100%'}}
            />
            <img
                src='https://www.sephora.com/contentimages/homepage/070621/Homepage/DesktopMweb/2021-07-19-hp-marketing-banner-amika-bust-your-brass-collection-fos-us-ca-d-slice.jpeg?imwidth=482'
                style={{marginTop: 10,width:'100%'}}
            />
        </div>
    )
}

export default Ads
