import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, SafeAreaView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Tasks } from '../../components/tasks';
import { styles } from './styles';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';




export function Home() {

    const [tasks, setTasks] = useState<string[]>([]);
    const [tasksName, setTasksName] = useState('');

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedCount, setSelectedCount] = useState(0);

    const Separator = () => <View style={styles.separator} />;

    const [inputBorderStyle, setInputBorderStyle] = useState({
        borderWidth: 1,
        borderColor: '#262626',
        borderRadius: 8,
    });

    function handleInputFocus() {
        setInputBorderStyle({
            borderWidth: 1,
            borderColor: '#5E60CE',
            borderRadius: 8,
        });
    };
    function handleInputBlur() {
        setInputBorderStyle({
            borderWidth: 1,
            borderColor: '#262626',
            borderRadius: 5,
        });
    };

    function handleParticipantAdd() {
        if (tasks.includes(tasksName)) {
            return Alert.alert("Essa tarefa já existe", "Ainda esta tarefa esta ativa")
        }
        setTasks(prevState => [...prevState, tasksName]);
        setTasksName('');
    }

    function handleTasksRemove(description: string) {
        Alert.alert('Remover', 'Tem certeza que deseja remover essa tarefa?', [
            {
                text: 'Sim',
                onPress: () =>
                    setTasks(prevState => prevState.filter(tasks => tasks !== description))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    useEffect(() => {
        setSelectedCount(selectedItems.length);
    }, [selectedItems]);

    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <Text style={styles.to}>
                    To
                </Text>
                <Text style={styles.do}>
                    Do
                </Text>
            </View>

            <View style={styles.form}>

                <TextInput
                    style={[styles.input, inputBorderStyle]}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setTasksName}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={tasksName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.status}>
                <Text style={{ color: '#4EA8DE' }}>Criadas {selectedCount} </Text>
                <Text style={{ color: '#5E60CE' }}>Concluídas {selectedCount} </Text>
            </View>
            <Separator />

            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Tasks
                        key={item}
                        description={item}
                        onRemove={() => handleTasksRemove(item)}
                    />
                )}

                showsVerticalScrollIndicator={false}

                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Você ainda não tem tarefas cadastradas
                    </Text>
                )}
            />
        </View>
    );
}