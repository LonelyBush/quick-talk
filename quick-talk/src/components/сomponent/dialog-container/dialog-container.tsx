import styles from './dialog-container-style.module.scss';

const mockMessagesArray = [
  {
    id: 'mes1',
    from: 'John',
    to: 'Debra',
    text: 'Hi, bro whats up ?!',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes2',
    from: 'Debra',
    to: 'John',
    text: 'Cool bro, how s yours ?',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes3',
    from: 'John',
    to: 'Debra',
    text: 'Test new test 3',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes4',
    from: 'John',
    to: 'Debra',
    text: 'Test test test test',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes5',
    from: 'Debra',
    to: 'John',
    text: 'cool test test cool test',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes6',
    from: 'Debra',
    to: 'John',
    text: 'cool test test cool test',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes7',
    from: 'Debra',
    to: 'John',
    text: 'cool test test cool test',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes8',
    from: 'Debra',
    to: 'John',
    text: 'cool test test cool test',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes10',
    from: 'John',
    to: 'Debra',
    text: 'Test test test test',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes11',
    from: 'John',
    to: 'Debra',
    text: 'Test test test test',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
  {
    id: 'mes12',
    from: 'John',
    to: 'Debra',
    text: 'Test test test test',
    dateTime: '2024-11-07T13:23:27.572Z',
  },
];

function DialogContainer() {
  const currentUser = 'John';
  return (
    <div className={styles.dialogContainerSection}>
      {mockMessagesArray.map((elem) => (
        <div
          key={elem.id}
          className={`${styles.messageStyle} ${currentUser === elem.from ? styles.from : styles.to}`}
        >
          <p>{currentUser === elem.from ? 'You' : elem.from}</p>
          <p>{elem.text}</p>
          <p>{elem.dateTime}</p>
        </div>
      ))}
    </div>
  );
}

export default DialogContainer;
