const ErrorExample = () => {

  let count = 0;

  const handleClick = () => { 
    count = count + 1;
    console.log(count);
  }

  return <div>
    <h2>{count}</h2>
    <button type="button" onClick={handleClick}
      className='btn'>
      {/* className='btn' is coming from global styles */}
      increase count
    </button>
  </div>;
};

export default ErrorExample;
