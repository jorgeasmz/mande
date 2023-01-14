--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

-- Started on 2023-01-13 02:54:32 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 224 (class 1255 OID 16571)
-- Name: create_client(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.create_client() RETURNS trigger
    LANGUAGE plpgsql
    AS $$BEGIN

IF (NEW.user_role = 2) THEN

	INSERT INTO client(client_id) VALUES (NEW.user_id);

END IF;
RETURN NULL;

END$$;


ALTER FUNCTION public.create_client() OWNER TO postgres;

--
-- TOC entry 225 (class 1255 OID 16572)
-- Name: create_worker(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.create_worker() RETURNS trigger
    LANGUAGE plpgsql
    AS $$BEGIN

IF (NEW.user_role = 3) THEN

	INSERT INTO worker(worker_id) VALUES (NEW.user_id);

END IF;
RETURN NULL;

END$$;


ALTER FUNCTION public.create_worker() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16472)
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    client_id character varying(30) NOT NULL,
    card_number integer
);


ALTER TABLE public.client OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16504)
-- Name: payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment (
    payment_id integer NOT NULL,
    id_service integer NOT NULL,
    amount integer NOT NULL
);


ALTER TABLE public.payment OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16503)
-- Name: payment_payment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_payment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_payment_id_seq OWNER TO postgres;

--
-- TOC entry 3489 (class 0 OID 0)
-- Dependencies: 218
-- Name: payment_payment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_payment_id_seq OWNED BY public.payment.payment_id;


--
-- TOC entry 209 (class 1259 OID 16388)
-- Name: person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.person (
    identification character varying(30) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    email character varying(100) NOT NULL,
    phone_number character varying(20) NOT NULL,
    utility_bill character varying(200)
);


ALTER TABLE public.person OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16399)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    role_id integer NOT NULL,
    role_name character varying(30) NOT NULL,
    role_desc character varying(100) NOT NULL
);


ALTER TABLE public.role OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16398)
-- Name: role_role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.role_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_role_id_seq OWNER TO postgres;

--
-- TOC entry 3490 (class 0 OID 0)
-- Dependencies: 210
-- Name: role_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.role_role_id_seq OWNED BY public.role.role_id;


--
-- TOC entry 223 (class 1259 OID 16547)
-- Name: service; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service (
    service_id integer NOT NULL,
    service_desc character varying(300),
    "time" time without time zone NOT NULL,
    date date NOT NULL,
    id_client character varying(30) NOT NULL,
    id_payment integer NOT NULL,
    "id_worker-task" integer NOT NULL
);


ALTER TABLE public.service OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16546)
-- Name: service_service_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_service_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.service_service_id_seq OWNER TO postgres;

--
-- TOC entry 3491 (class 0 OID 0)
-- Dependencies: 222
-- Name: service_service_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_service_id_seq OWNED BY public.service.service_id;


--
-- TOC entry 216 (class 1259 OID 16466)
-- Name: task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.task (
    task_id integer NOT NULL,
    task_name character varying(50) NOT NULL,
    task_desc character varying(200) NOT NULL,
    payment_mode character varying(20) NOT NULL
);


ALTER TABLE public.task OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16465)
-- Name: task_task_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.task_task_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.task_task_id_seq OWNER TO postgres;

--
-- TOC entry 3492 (class 0 OID 0)
-- Dependencies: 215
-- Name: task_task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.task_task_id_seq OWNED BY public.task.task_id;


--
-- TOC entry 213 (class 1259 OID 16438)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    user_id character varying(30) NOT NULL,
    user_email character varying(200) NOT NULL,
    user_pword character varying(30) NOT NULL,
    user_role integer NOT NULL,
    picture character varying(200)
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16437)
-- Name: user_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_user_id_seq OWNER TO postgres;

--
-- TOC entry 3493 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_user_id_seq OWNED BY public."user".user_id;


--
-- TOC entry 214 (class 1259 OID 16454)
-- Name: worker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.worker (
    worker_id character varying(30) NOT NULL,
    is_active boolean DEFAULT false NOT NULL,
    acct_number integer,
    id_scan character varying(200)
);


ALTER TABLE public.worker OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16530)
-- Name: worker-task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."worker-task" (
    "worker-task_id" integer NOT NULL,
    id_worker character varying(30) NOT NULL,
    id_task integer NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public."worker-task" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16529)
-- Name: worker-task_worker-task_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."worker-task_worker-task_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."worker-task_worker-task_id_seq" OWNER TO postgres;

--
-- TOC entry 3494 (class 0 OID 0)
-- Dependencies: 220
-- Name: worker-task_worker-task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."worker-task_worker-task_id_seq" OWNED BY public."worker-task"."worker-task_id";


--
-- TOC entry 3289 (class 2604 OID 16507)
-- Name: payment payment_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment ALTER COLUMN payment_id SET DEFAULT nextval('public.payment_payment_id_seq'::regclass);


--
-- TOC entry 3286 (class 2604 OID 16402)
-- Name: role role_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role ALTER COLUMN role_id SET DEFAULT nextval('public.role_role_id_seq'::regclass);


--
-- TOC entry 3291 (class 2604 OID 16550)
-- Name: service service_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service ALTER COLUMN service_id SET DEFAULT nextval('public.service_service_id_seq'::regclass);


--
-- TOC entry 3288 (class 2604 OID 16469)
-- Name: task task_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task ALTER COLUMN task_id SET DEFAULT nextval('public.task_task_id_seq'::regclass);


--
-- TOC entry 3290 (class 2604 OID 16533)
-- Name: worker-task worker-task_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."worker-task" ALTER COLUMN "worker-task_id" SET DEFAULT nextval('public."worker-task_worker-task_id_seq"'::regclass);


--
-- TOC entry 3477 (class 0 OID 16472)
-- Dependencies: 217
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.client (client_id, card_number) FROM stdin;
1075029024	\N
\.


--
-- TOC entry 3479 (class 0 OID 16504)
-- Dependencies: 219
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment (payment_id, id_service, amount) FROM stdin;
\.


--
-- TOC entry 3469 (class 0 OID 16388)
-- Dependencies: 209
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.person (identification, first_name, last_name, email, phone_number, utility_bill) FROM stdin;
1193099044	Jorge	Arias	jorgearias@gmail.com	3012224880	\N
1075029024	Alejandra	Carvajal	alejacarvajal@gmail.com	3225826450	\N
1007224044	Miguel	Fernández	miguelfernandez@gmail.com	3001824022	\N
\.


--
-- TOC entry 3471 (class 0 OID 16399)
-- Dependencies: 211
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role (role_id, role_name, role_desc) FROM stdin;
1	Administrador	Encargado de gestionar el sistema y la base de datos.
2	Cliente	Cliente del sistema.
3	Trabajador	Trabajador del sistema.
\.


--
-- TOC entry 3483 (class 0 OID 16547)
-- Dependencies: 223
-- Data for Name: service; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service (service_id, service_desc, "time", date, id_client, id_payment, "id_worker-task") FROM stdin;
\.


--
-- TOC entry 3476 (class 0 OID 16466)
-- Dependencies: 216
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.task (task_id, task_name, task_desc, payment_mode) FROM stdin;
1	Pasear mascota	El trabajador paseará un máximo de 3 mascotas cerca de tu casa.	Labor
2	Cortar césped	El trabajador cortará el césped de tu casa.	Hora
3	Tutoría de inglés	Se te dará apoyo en el aprendizaje de inglés (Nivel: B2).	Hora
4	Tutoría de matemáticas	Se te dará apoyo en el aprendizaje de matemáticas (Bachillerato).	Hora
5	Tutoría de física	Se te dará apoyo en el aprendizaje de física (Bachillerato).	Hora
6	Tutoría de química	Se te dará apoyo en el aprendizaje de química (Bachillerato).	Hora
7	Cerrajería	Se te brindará solución a problemas relacionados con cerraduras.	Labor
8	Dibujo	El artista realizará una ilustración que desees.	Labor
9	Música	El artista realizará una presentación musical del instrumento de su especialización.	Hora
10	Aseo	Se realizarán actividades básicas de limpieza para hogar (Barrer, trapear, limpiar).	Hora
11	Peluquería	Se realizarán cortes de cabello para hombre o mujer.	Labor
12	Manicure	Se realizará manicure para hombre o mujer.	Labor
13	Pedicure	Se realizará pedicure para hombre o mujer.	Labor
14	Lavandería	Se realizará el lavado de ropa de hasta 32 lbs.	Labor
15	Fotografía	Se brindará el servicio de fotografía para algún evento.	Hora
\.


--
-- TOC entry 3473 (class 0 OID 16438)
-- Dependencies: 213
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (user_id, user_email, user_pword, user_role, picture) FROM stdin;
1193099044	jorgearias@gmail.com	1234	1	\N
1075029024	alejacarvajal@gmail.com	0000	2	\N
1007224044	miguelfernandez@gmail.com	6666	3	\N
\.


--
-- TOC entry 3474 (class 0 OID 16454)
-- Dependencies: 214
-- Data for Name: worker; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.worker (worker_id, is_active, acct_number, id_scan) FROM stdin;
1007224044	f	\N	\N
\.


--
-- TOC entry 3481 (class 0 OID 16530)
-- Dependencies: 221
-- Data for Name: worker-task; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."worker-task" ("worker-task_id", id_worker, id_task, price) FROM stdin;
\.


--
-- TOC entry 3495 (class 0 OID 0)
-- Dependencies: 218
-- Name: payment_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_payment_id_seq', 1, false);


--
-- TOC entry 3496 (class 0 OID 0)
-- Dependencies: 210
-- Name: role_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.role_role_id_seq', 3, true);


--
-- TOC entry 3497 (class 0 OID 0)
-- Dependencies: 222
-- Name: service_service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_service_id_seq', 1, false);


--
-- TOC entry 3498 (class 0 OID 0)
-- Dependencies: 215
-- Name: task_task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.task_task_id_seq', 15, true);


--
-- TOC entry 3499 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_user_id_seq', 1, false);


--
-- TOC entry 3500 (class 0 OID 0)
-- Dependencies: 220
-- Name: worker-task_worker-task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."worker-task_worker-task_id_seq"', 1, false);


--
-- TOC entry 3309 (class 2606 OID 16478)
-- Name: client client_card_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_card_number_key UNIQUE (card_number);


--
-- TOC entry 3311 (class 2606 OID 16611)
-- Name: client client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (client_id);


--
-- TOC entry 3313 (class 2606 OID 16509)
-- Name: payment payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (payment_id);


--
-- TOC entry 3293 (class 2606 OID 16431)
-- Name: person person_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_email_key UNIQUE (email);


--
-- TOC entry 3295 (class 2606 OID 16591)
-- Name: person person_phone_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_phone_number_key UNIQUE (phone_number);


--
-- TOC entry 3297 (class 2606 OID 16589)
-- Name: person person_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (identification);


--
-- TOC entry 3299 (class 2606 OID 16404)
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (role_id);


--
-- TOC entry 3317 (class 2606 OID 16554)
-- Name: service service_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (service_id);


--
-- TOC entry 3307 (class 2606 OID 16471)
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (task_id);


--
-- TOC entry 3301 (class 2606 OID 16582)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);


--
-- TOC entry 3315 (class 2606 OID 16535)
-- Name: worker-task worker-task_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."worker-task"
    ADD CONSTRAINT "worker-task_pkey" PRIMARY KEY ("worker-task_id");


--
-- TOC entry 3303 (class 2606 OID 16487)
-- Name: worker worker_acct_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker
    ADD CONSTRAINT worker_acct_number_key UNIQUE (acct_number);


--
-- TOC entry 3305 (class 2606 OID 16637)
-- Name: worker worker_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker
    ADD CONSTRAINT worker_pkey PRIMARY KEY (worker_id);


--
-- TOC entry 3328 (class 2620 OID 16652)
-- Name: user new_client; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER new_client AFTER INSERT ON public."user" FOR EACH ROW EXECUTE FUNCTION public.create_client();


--
-- TOC entry 3329 (class 2620 OID 16653)
-- Name: user new_worker; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER new_worker AFTER INSERT ON public."user" FOR EACH ROW EXECUTE FUNCTION public.create_worker();


--
-- TOC entry 3322 (class 2606 OID 16627)
-- Name: client client_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_client_id_fkey FOREIGN KEY (client_id) REFERENCES public."user"(user_id) NOT VALID;


--
-- TOC entry 3327 (class 2606 OID 16622)
-- Name: service service_id_client_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_id_client_fkey FOREIGN KEY (id_client) REFERENCES public.client(client_id) NOT VALID;


--
-- TOC entry 3325 (class 2606 OID 16560)
-- Name: service service_id_payment_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_id_payment_fkey FOREIGN KEY (id_payment) REFERENCES public.payment(payment_id);


--
-- TOC entry 3326 (class 2606 OID 16565)
-- Name: service service_id_worker-task_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service
    ADD CONSTRAINT "service_id_worker-task_fkey" FOREIGN KEY ("id_worker-task") REFERENCES public."worker-task"("worker-task_id");


--
-- TOC entry 3318 (class 2606 OID 16444)
-- Name: user user_user_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_user_email_fkey FOREIGN KEY (user_email) REFERENCES public.person(email);


--
-- TOC entry 3320 (class 2606 OID 16599)
-- Name: user user_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.person(identification) NOT VALID;


--
-- TOC entry 3319 (class 2606 OID 16449)
-- Name: user user_user_role_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_user_role_fkey FOREIGN KEY (user_role) REFERENCES public.role(role_id);


--
-- TOC entry 3323 (class 2606 OID 16541)
-- Name: worker-task worker-task_id_task_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."worker-task"
    ADD CONSTRAINT "worker-task_id_task_fkey" FOREIGN KEY (id_task) REFERENCES public.task(task_id);


--
-- TOC entry 3324 (class 2606 OID 16647)
-- Name: worker-task worker-task_id_worker_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."worker-task"
    ADD CONSTRAINT "worker-task_id_worker_fkey" FOREIGN KEY (id_worker) REFERENCES public.worker(worker_id) NOT VALID;


--
-- TOC entry 3321 (class 2606 OID 16638)
-- Name: worker worker_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker
    ADD CONSTRAINT worker_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public."user"(user_id) NOT VALID;


-- Completed on 2023-01-13 02:54:33 -05

--
-- PostgreSQL database dump complete
--

