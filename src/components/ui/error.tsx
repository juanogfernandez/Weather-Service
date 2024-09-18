type ErrorSpanProps = {
  message?: string | null;
};

// Componente que renderiza errores
export default function ErrorSpan({ message }: ErrorSpanProps) {
  return (
    <>
      <div className="mt-4 flex h-10 items-center justify-center rounded border border-red-400 bg-red-100 text-red-700 opacity-70">
        <div className="flex h-full w-auto items-center justify-center p-2">
          <span className="w-auto text-sm font-medium">
            {message}
          </span>
        </div>
      </div>
    </>
  );
}
