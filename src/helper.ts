import dayjs from 'dayjs';

// eslint-disable-next-line import/prefer-default-export
export const caseInsensitiveSort = (prev: any, curr: any, columnId: string) => {
  if (prev.original[columnId].toLowerCase() > curr.original[columnId].toLowerCase()) {
    return 1;
  } if (prev.original[columnId].toLowerCase() < curr.original[columnId].toLowerCase()) {
    return -1;
  }
  return 0;
};

export const dateSort = (prev: any, curr: any, columnId: string) => {
  if (dayjs(prev.original[columnId]).isAfter(curr.original[columnId])) {
    return 1;
  } if (dayjs(prev.original[columnId]).isBefore(curr.original[columnId])) {
    return -1;
  }
  return 0;
};
