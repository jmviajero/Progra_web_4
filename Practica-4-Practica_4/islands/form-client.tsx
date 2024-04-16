import { useState } from "preact/hooks";

export default function ClientForm() {
  const [client, setClient] = useState<Client>({
    Name: "",
    Email: "",
    Address: "",
    City: "",
    Country: "",
    Phone: 0,
  });

  function handleChange(event: any) {
    if (
      client.Name == "" || client.Email == "" || client.Address == "" ||
      client.City == "" || client.Country == "" || client.Phone == 0
    ) {
      throw new Error("Hay campos en blanco");
    }
    event.preventDefault();
    fetch("/api/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
      }}
      onSubmit={handleChange}
    >
      <input
        type="text"
        placeholder="Name"
        value={client?.Name}
        onChange={(event) => setClient({ ...client, Name: event.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={client?.Email}
        onChange={(event) =>
          setClient({ ...client, Email: event.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={client?.Address}
        onChange={(event) =>
          setClient({ ...client, Address: event.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={client?.City}
        onChange={(event) => setClient({ ...client, City: event.target.value })}
      />
      <input
        type="text"
        placeholder="Country"
        value={client?.Country}
        onChange={(event) =>
          setClient({ ...client, Country: event.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={client?.Phone}
        onChange={(event) =>
          setClient({ ...client, Phone: Number(event.target.value) })}
      />
      <button type="submit">Create</button>
    </form>
  );
}

type Client = {
  Name: string;
  Email: string;
  Address: string;
  City: string;
  Country: string;
  Phone: number;
};
