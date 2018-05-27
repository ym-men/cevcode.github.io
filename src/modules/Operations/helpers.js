import moment from 'moment';

export const prettifyTimestamp = timestamp => {
  const date = moment(timestamp).format('MMM DD, YYYY, h:mm a');

  return date;
};
