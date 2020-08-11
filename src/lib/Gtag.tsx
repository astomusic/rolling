declare global {
  interface Window {
    gtag: any;
  }
}
const logging = (action: string, category?: string, label?: string, value?: string) => {
  if (!window.gtag) {
    return;
  }

  if (action === 'exception') {
    window.gtag('event', 'exception', {
      description: category ? category : '',
      fatal: label ? (label === 'FALSE' ? false : true) : '',
    });
  } else {
    window.gtag('event', action, {
      event_category: category ? category : '',
      event_label: label ? label : '',
      value: value ? value : '',
    });
  }
};

export default logging;
