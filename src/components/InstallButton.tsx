import { useInstallPrompt } from '../hooks/useInstallPrompt';

interface InstallButtonProps {
  className?: string;
  label?: string;
}

export default function InstallButton({ className, label = 'Install App' }: InstallButtonProps) {
  const { canInstall, install } = useInstallPrompt();

  if (!canInstall) return null;

  return (
    <button onClick={install} className={className}>
      {label}
    </button>
  );
}
