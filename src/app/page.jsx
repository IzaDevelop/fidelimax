"use client"
import axios from 'axios';
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Rating } from '@/components/form/Rating';
import { Radio } from "@/components/form/Radio";
import { optionsRadio } from "@/util/optionsRadio";
import { Select } from "@/components/form/Select";
import { Textarea } from "@/components/form/Textarea";
import { Checkbox } from "@/components/form/Checkbox";
import { optionCheckbox } from "@/util/optionCheckbox";
import { optionMultipleSelect } from "@/util/optionMultipleSelect";
import { Button } from "@/components/form/Button";
import { Modal } from '@/components/Modal';
import { Loading } from '@/components/Loading';


export default function Home() {
  const [fields, setFields] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: [],
    seven: [],
    eight: "",
  });

  const [modal, setModal] = useState({
    state: false,
    title: "",
    message: "",
  });

  const [questions, setQuestions] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function GetQuestion() {
      try {
        const response = await axios.get('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json');
        if (response.status === 200) {
          setQuestions(response.data);

          if (Object.keys(response.data).length !== 0) {
            const dataSix = response.data.itens[5].itens

            const dataSeven = response.data.itens[6].itens

            dataSix.forEach(object => {
              delete object['description']
            });

            dataSeven.forEach(object => {
              delete object['description']
            });

            setFields((prevFields) => ({
              ...prevFields,
              one: response.data.itens[0].answerValue,
              two: response.data.itens[1].answerValue,
              five: response.data.itens[4].answerValue,
              six: dataSix.map(e => e.value),
              seven: dataSeven.map(e => e.value),
              eight: response.data.itens[7].answerValue,
            }))

            setLoading(false)
          } else {
            setLoading(true)
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    GetQuestion();
  }, []);

  async function handleFakePost(event) {
    event.preventDefault(event);

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts/', fields);

      if (response.status === 201) {
        setModal({
          state: true,
          title: 'Sua avaliação foi enviada com sucesso',
          message: response.data.warning,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function handleError() {
    await axios.get('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json')
      .then((response) => {
        setModal({
          state: true,
          title: response.data.error,
          message: response.data.warning,
        });
      }).catch((error) => {
        console.error(error);
      })
  }

  async function handleSucess() {
    await axios.get('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json')
      .then((response) => {
        setModal({
          state: true,
          title: 'Formulário enviado com sucesso!',
          message: response.data.warning,
        });
      }).catch((error) => {
        console.error(error);
      })
  }

  async function handleSubmit(event, fields) {
    event.preventDefault(event)
    console.log('okay')
  }

  const onFieldChange = (event) => {
    let value = event.target.value

    if (event.target.dataset.tag) {
      setFields({ ...fields, [event.target.dataset.tag]: value })
      return null
    } else if (event.target.type === "checkbox") {
      value = event.target.checked;
      setFields({ ...fields, [event.target.id]: value });
    } else if (event.target.type === "radio") {
      setFields({ ...fields, [event.target.name]: value });
    } else {
      setFields({ ...fields, [event.target.id]: value });
    }
  };

  const handleMultipleSelect = (e) => {
    const value = Number(e.target.value);

    if (fields.six.includes(value)) {
      fields.six = fields.six.filter((cur) => cur !== value)
    }
    else {
      fields.six = [...fields.six, value];
    }

    fields.six.sort()

    setFields({ ...fields });
  };

  const handleMultipleCheckbox = (e) => {
    const value = Number(e.target.value);

    if (fields.seven.includes(value)) {
      fields.seven = fields.seven.filter((cur) => cur !== value)
    }
    else {
      fields.seven = [...fields.seven, value];
    }

    fields.seven.sort()

    setFields({ ...fields });
  };

  return (
    <article>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <section className="md:px-4 mx-auto pt-10 md:py-10 sm:w-full md:max-w-2xl">
          <h1 className="text-2xl text-center md:text-start lg:text-[40px] text-white font-semibold pb-5">Pesquisa de Satisfação</h1>
          <form onSubmit={handleSubmit} className="relative mx-auto sm:w-full md:max-w-2xl bg-white text-gray-8 rounded-2xl p-5 md:p-8 h-full text-start">
            {questions?.itens[0]?.typeQuestion === 1 && (
              <Rating
                id={'one'}
                label={'Título da pergunta deve ficar aqui'}
                description={questions?.itens[0]?.content}
                required={questions?.itens[0]?.mandatory}
                onChange={onFieldChange}
                value={fields.one}
                custom={'text-xl md:text-2xl font-semibold'}
              />
            )}

            {questions?.itens[1]?.typeQuestion === 2 && (
              <Radio
                id={'two'}
                label={'Título da pergunta deve ficar aqui'}
                description={questions?.itens[1]?.content}
                required={questions?.itens[1]?.mandatory}
                options={optionsRadio}
                onChange={onFieldChange}
                value={fields.two}
                custom={'text-xl md:text-2xl font-semibold'}
                index={false}
              />
            )}

            {questions?.itens[2]?.typeQuestion === 3 && (
              <Textarea
                id={'three'}
                label={`${questions?.itens[2]?.content} <span class="text-gray-5">(opcional)</span>`}
                placeholder={'Digite aqui...'}
                required={questions?.itens[2]?.mandatory}
                onChange={onFieldChange}
                value={fields.three}
              />
            )}

            {questions?.itens[3]?.typeQuestion === 4 && (
              <Select
                id={'four'}
                placeholder={questions?.itens[3]?.content}
                required={questions?.itens[3]?.mandatory}
                options={[
                  {
                    label: questions?.itens[3]?.itens[0].description,
                    value: questions?.itens[3]?.itens[0].value
                  },
                  {
                    label: questions?.itens[3]?.itens[1].description,
                    value: questions?.itens[3]?.itens[1].value
                  },
                  {
                    label: questions?.itens[3]?.itens[2].description,
                    value: questions?.itens[3]?.itens[2].value
                  }
                ]}
                onChange={onFieldChange}
                value={fields.four}
              />
            )}

            {questions?.itens[4]?.typeQuestion === 5 && (
              <Radio
                id={'five'}
                label={questions?.itens[4]?.content}
                required={questions?.itens[4]?.mandatory}
                options={[
                  {
                    label: questions?.itens[4]?.itens[0].description,
                    value: questions?.itens[4]?.itens[0].value
                  },
                  {
                    label: questions?.itens[4]?.itens[1].description,
                    value: questions?.itens[4]?.itens[1].value
                  }
                ]}
                onChange={onFieldChange}
                value={fields.five}
                index={true}
              />
            )}

            {questions?.itens[5]?.typeQuestion === 6 && (
              <Checkbox
                id={'six'}
                label={questions?.itens[5]?.content}
                required={fields.six.length === 0 ? questions?.itens[5]?.mandatory : false}
                options={optionMultipleSelect}
                onChange={handleMultipleSelect}
                value={fields.six}
                custom={questions?.itens[5]?.horizontal}
              />
            )}

            {questions?.itens[6]?.typeQuestion === 6 && (
              <Checkbox
                id={'seven'}
                label={questions?.itens[6]?.content}
                required={fields.seven.length === 0 ? questions?.itens[6]?.mandatory : false}
                options={optionCheckbox}
                onChange={handleMultipleCheckbox}
                value={fields.seven}
                custom={questions?.itens[6]?.horizontal}
              />
            )}

            {questions?.itens[7]?.typeQuestion === 3 && (
              <Textarea
                id={'eight'}
                label={questions?.itens[7]?.content}
                placeholder={'Digite a resposta'}
                required={questions?.itens[7]?.mandatory}
                onChange={onFieldChange}
                value={fields.eight}
              />
            )}

            <Button
              label={'Enviar'}
              type={'submit'}
            />

            <div className='flex flex-col md:flex-row flex-wrap gap-3 justify-between items-start md:items-center mt-3'>
              <Button
                label={'Enviar Erro'}
                type={'button'}
                function={() => handleError()}
              />

              <Button
                label={'Enviar Sucesso'}
                type={'button'}
                function={() => handleSucess()}
              />

              <Button
                label={'Enviar Fake Post'}
                type={'button'}
                function={(e) => handleFakePost(e)}
              />
            </div>
          </form>
        </section>
      )}
      {modal.state && <Modal title={modal.title} message={modal.message} close={setModal} />}
    </article>
  )
}