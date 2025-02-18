import Input from '@/view/ui/input/input';
import styles from './send-form-style.module.scss';
import Button from '@/view/ui/button/button';

function SendForm() {
  return (
    <form className={styles.sendFormBlock}>
      <Input type="text" name="message-input" placeholder="Type message..." />
      <Button btnType="submit">Send</Button>
    </form>
  );
}

export default SendForm;
