import {operators} from '../utils/r6s_data'

export default function Operator() {

    const path = "./src/assets/images/";

    return (
        operators.map(op => (
            <div key={op.id} className="card flex flex-col">
                <section className='flex flex-col items-center text-center rounded overflow-hidden'>
                    <div className='relative flex flex-col items-center'>
                        <img src={path+"operators/"+op.img} alt={op.agent} />
                        <img className='absolute bottom-2 w-1/2' src={path+"badges/"+op.badge} alt="Badge"/>
                    </div>
                    <h4 className='w-full p-2 bg-black uppercase'>{op.agent}</h4>
                </section>
            </div>  
        ))
    )
}