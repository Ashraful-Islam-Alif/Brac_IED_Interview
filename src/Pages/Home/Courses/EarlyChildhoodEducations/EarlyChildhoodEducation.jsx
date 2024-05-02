

const EarlyChildhoodEducation = ({earlyChildhoodEducation}) => {
    const {title,description,image,price}= earlyChildhoodEducation
    return (
        <div className=" bg-slate-100 py-4 px-2 rounded shadow-lg">
            <img style={{ width: '100%', height: '300px' }} src={image} alt=""  />
            <h2 className="text-2xl font-semibold pb-2">{title}</h2>
            <p className="pb-4">{description}</p>
            <p className="text-xl font-bold"><span className="font-extrabold text-xl">৳:</span> {price}</p>
        </div>
    );
};

export default EarlyChildhoodEducation;