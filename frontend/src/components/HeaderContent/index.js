import React from 'react'
import { ActivePage, BreadcrumLinks, HeaderShowcase, HeaderShowcaseContent, PrevPage, ShowcaseTitle, SpanErrow } from './HeaderContentElements'
import DetailsImg from '../../images/detai.svg'

const HeaderContent = () => {
    return (
        <>
            <HeaderShowcase backgroundImage = {DetailsImg}>
                <HeaderShowcaseContent>
                    <ShowcaseTitle>Services details</ShowcaseTitle>
                    <BreadcrumLinks>
                        <PrevPage to='/'>Home
                        </PrevPage>
                        <SpanErrow> &gt; </SpanErrow>
                        <ActivePage> Service Details</ActivePage>
                    </BreadcrumLinks>
                </HeaderShowcaseContent>
            </HeaderShowcase>
        </>
        
      )
}

export default HeaderContent