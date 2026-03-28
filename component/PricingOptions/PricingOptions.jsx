import React, {use} from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)

    // console.log(pricingData.pricingPlans);
    return (
        <div>
            <h1 className='text-3xl'>Get Out Membership</h1> 
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* {
                pricingData.pricingPlans.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            } */}
            {
                pricingData.pricingPlans.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
            }
           </div>
        </div>
    );
};

export default PricingOptions;