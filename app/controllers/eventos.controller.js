import Evento from "../models/eventos.js";
import Organizador from "../models/Organizador.js";


export const events = async (req, res) => {
  try {
    const eventos = await Evento.findAll({});
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener eventos', error });
  }
};

export const organicers = async (req, res) => {
  try {
    const organizadores = await Organizador.findAll({});
    res.status(200).json(organizadores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener organizadores', error });
  }
};


export const event = async (req, res) => {
    const { id } = req.params;
  
    try {
      if (id) {
        const evento = await Evento.findByPk(id);
        if (!evento) {
          return res.status(404).json({ message: 'Evento no encontrado' });
        }
        return res.status(200).json(evento);
      } else {
        const eventos = await Evento.findAll({});
        return res.status(200).json(eventos);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener eventos', error });
    }
  };
  

  export const organicer = async (req, res) => {
    const { id } = req.params;
  
    try {
      if (id) {
        const organizador = await Organizador.findByPk(id);
        if (!organizador) {
          return res.status(404).json({ message: 'Organizador no encontrado' });
        }
        return res.status(200).json(organizador);
      } else {
        const organizadores = await Organizador.findAll({});
        return res.status(200).json(organizadores);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener organizadores', error });
    }
  };
  

export const deleteOrg = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleted = await Organizador.destroy({
        where: { id: id }
      });
  
      if (deleted === 0) {
        return res.status(404).json({ message: 'Organizador no encontrado' });
      }
  
      return res.status(200).json({ message: 'Organizador eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar el organizador', error });
    }
  };

  export const deleteEv = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleted = await Evento.destroy({
        where: { id: id }
      });
  
      if (deleted === 0) {
        return res.status(404).json({ message: 'Evento no encontrado' });
      }
  
      return res.status(200).json({ message: 'Evento eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar el evento', error });
    }
  };

  export const editOrg = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
  
    try {
      const [updated] = await Organizador.update(
        { nombre },
        { where: { id: id } }
      );
  
      if (updated === 0) {
        return res.status(404).json({ message: 'Organizador no encontrado' });
      }
  
      return res.status(200).json({ message: 'Organizador actualizado correctamente' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar el organizador', error });
    }
  };

  export const editEv = async (req, res) => {
  const { id } = req.params;
  const { titulo, fecha } = req.body;

  try {
    const [updated] = await Evento.update(
      { titulo, fecha },
      { where: { id: id } }
    );

    if (updated === 0) {
      return res.status(404).json({ message: 'Evento no encontrado' });
    }

    return res.status(200).json({ message: 'Evento actualizado correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el evento', error });
  }
};

export const createOrg = async (req, res) => {
  const { nombre } = req.body;

  try {
    if (!nombre || nombre.trim() === '') {
      return res.status(400).json({ message: 'El nombre es requerido' });
    }

    const nuevoOrganizador = await Organizador.create({ nombre });
    return res.status(201).json(nuevoOrganizador);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el organizador', error });
  }
};

export const createEv = async (req, res) => {
  const { nombre, fecha, lugar, imagen, organizador_id } = req.body;

  try {
    // Validaciones básicas
    if (!nombre || !fecha || !lugar || !organizador_id) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    // Creamos el evento
    const nuevoEvento = await Evento.create({
      nombre,
      fecha,
      lugar,
      imagen: imagen || null,
      organizador_id
    });

    return res.status(201).json(nuevoEvento);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el evento', error });
  }
};
