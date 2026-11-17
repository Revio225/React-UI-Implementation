function StudentCard({ title, value }) {
  return (
    <div className="flex-1 rounded-xl bg-(--card-bg) p-5 shadow-(--card-shadow)]">
      <p className="text-sm text-(--muted-text)]">
        {title}
      </p>

      <h2 className="mt-2 text-2xl font-bold text-(--primary-color)]">
        {value}
      </h2>
    </div>
  );
}

export default StudentCard;
