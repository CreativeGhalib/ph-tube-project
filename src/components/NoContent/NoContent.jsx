import icon from '../../assets/Icon.png';

const NoContent = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center text-center">
      <img className="w-[120px]" src={icon} alt="" />
      <h2 className="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
    </div>
  );
};

export default NoContent;
