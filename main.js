JitsiMeetJS.init();

const domain = 'meet.jit.si';
const options = {
    roomName: 'connecthub',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet'),
};
const api = new JitsiMeetExternalAPI(domain, options);
