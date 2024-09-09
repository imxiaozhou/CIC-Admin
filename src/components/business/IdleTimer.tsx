import { CustomModal } from '@/components/proComponents';

let countdown = 15;

const IdleTimer: React.FC = () => {
  const dispatch = useAppDispatch();
  const [timer, setTimer] = useState(countdown * 60 * 1000);
  const [isIdle, setIsIdle] = useState(false);
  const isIdleTimeout = useAppSelector(selectIsIdleTimeout);

  const getIdleTimeout = async () => {};

  const handleActivity = () => {
    setTimer(countdown * 60 * 1000);
  };

  const onTimeout = () => {};

  useEffect(() => {
    let timeoutId: any = null;

    if (timer > 0 && !isIdle) {
      timeoutId = setTimeout(() => {
        setTimer(timer - 1000);
      }, 1000);
    } else if (timer <= 0 && !isIdle) {
      setIsIdle(true);
      dispatch(setIsIdleTimeout(true));
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timer]);

  useEffect(() => {
    isIdleTimeout ? onTimeout() : getIdleTimeout();

    const eventListeners = ['mousemove', 'keydown'];

    eventListeners.forEach((event) => {
      document.addEventListener(event, handleActivity);
    });

    return () => {
      eventListeners.forEach((event) => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, []);

  return isIdle ? (
    <CustomModal
      open={isIdle}
      type="info"
      title={$t(
        'You have been idle for too long, and the system is about to exit.'
      )}
      onOk={onTimeout}
      onCancel={onTimeout}
    />
  ) : null;
};

export default IdleTimer;
