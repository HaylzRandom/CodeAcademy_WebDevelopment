const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep boop');
      }
    }
  }
  
  const tinCan = robotFactory('P-500', true);
  
  tinCan.beep();