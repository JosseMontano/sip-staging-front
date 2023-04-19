import { GetHoursType } from "@/interfaces/product/hour";
import deleteServices from "@/utils/delete";
import React, { useEffect } from "react";

interface Params {
  data: GetHoursType[];
  handleLoadData: () => void;
}

const ListHours = ({ data, handleLoadData }: Params) => {
  useEffect(() => {
    handleLoadData();
  }, [handleLoadData]);

  const handleDelete = async (id: number) => {
    const url = "hour/" + id;
    const { idDelete } = await deleteServices(url);
    if (idDelete) {
      alert("se elimino");
    }
  };

  return (
    <div>
      <h2>Horarios</h2>
      {data.length > 0 && (
        <table>
          <thead>
            <th>Dia</th>
            <th>Hora Inicio</th>
            <th>Hora Fin</th>
            <th>Operaciones</th>
          </thead>
          <tbody>
            {data.map((v) => (
              <tr key={v.id}>
                <td>{v.day}</td>
                <td>{v.start_time}</td>
                <td>{v.end_time}</td>
                <td>
                  <button onClick={() => handleDelete(v.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListHours;
