export const exportToCSV = (data: { questionId: number; answer: string }[], filename: string) => {
    const csvContent =
      "questionId,answer\n" +
      data.map(item => `${item.questionId},${item.answer}`).join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };