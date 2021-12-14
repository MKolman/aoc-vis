import json

id2name = [
    ('29862', 'Ready'),
    ('147542', 'Steady'),
    ('191056', 'Blizzard'),
    ('204164', 'Dasher'),
    ('271869', 'Donder'),
    ('374193', 'Rudolph'),
    ('398342', 'Cupid'),
    ('406717', 'Prancer'),
    ('688876', 'Blitzen'),
    ('707165', 'Racer'),
    ('1002473', 'Comet'),
    ('1021413', 'Dancer'),
    ('1617344', 'Vixen'),
    ('1808372', 'Pacer'),
    ('1354111', 'Sample'),
]

def anon_member(member, idx, name):
    member['id'] = idx
    member['name'] = name
    return member

def main():
    ldr = json.loads(input())
    ldr['owner_id'] = str(len(id2name))
    ldr['members'] = {
        i+1: anon_member(ldr['members'][idx], i+1, name)
        for i, (idx, name) in enumerate(id2name)
    }
    print(json.dumps(ldr))

if __name__ == '__main__':
    main()
