import Button from '@/components/ui/button/button';
import styles from './send-form-style.module.scss';
import Input from '@/components/ui/input/input';

function SendForm() {
  return (
    <form className={styles.sendFormBlock}>
      <Input type="text" name="message-input" placeholder="Type message..." />
      <Button btnType="submit">Send</Button>
    </form>
  );
}

export default SendForm;
